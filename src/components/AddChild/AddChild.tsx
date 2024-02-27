import React, {FormEvent, useState} from "react";
import {ChildEntity, CreateChildReq, GiftEntity } from "types";
import {Spinner} from "../common/Spinner/Spinner";

export const AddChild = () => {
    const [form, setForm] = useState<CreateChildReq>({
        name: '',
        giftid: '',
    });

    const [loading, setLoading] = useState<boolean>(false)
    const [resultInfo, setResultInfo] = useState<string | null>(null)

    const updateForm = (key: string, value: any ) => {
        setForm(form => ({
            ...form, [key]: value,
        }));
    };

    const sendForm = async (event: FormEvent) => {
        event.preventDefault();

        setLoading(true);

        try {
            const res = await fetch('http://localhost:3001/child', {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json',
                },
                body: JSON.stringify(form)
            });
            const data: ChildEntity = await res.json();


            setResultInfo(`${data.name} has been added on Santa's list`);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <Spinner/>
    }

    if (resultInfo !== null) {
        return <div>
            <p><strong>{resultInfo}</strong></p>;
            <button onClick={() => setResultInfo(null)}>Add another one</button>
        </div>

    }

    return <form onSubmit={sendForm}>
        <h2>Add child</h2>
        <p>
            <label>
                name: <br/>
                <input
                    type="text"
                    value={form.name}
                    onChange={event => updateForm('name', event.target.value)}
                />
            </label>
        </p>
        <button type="submit">Add</button>
    </form>
};
