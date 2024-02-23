import React, {FormEvent, useState} from "react";
import { CreateGiftReq, GiftEntity } from "types";
import {Spinner} from "../common/Spinner/Spinner";

export const AddGift = () => {
    const [form, setForm] = useState<CreateGiftReq>({
        name: '',
        count: 0,
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
            const res = await fetch('http://localhost:3001/gift', {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json',
                },
                body: JSON.stringify(form)
            });
            const data: GiftEntity = await res.json();


            setResultInfo(`${data.name} added with ID ${data.id}`);
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
        <h2>Add gift</h2>
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
        <p>
            <label>
                count: <br/>
                <input
                    type="number"
                    value={form.count}
                    onChange={event => updateForm('count', Number(event.target.value))}
                />
            </label>
        </p>
        <button type="submit">Add</button>
    </form>
};
