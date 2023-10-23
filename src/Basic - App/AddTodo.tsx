import { useEffect, useRef, useState } from "react";

type cars = {
    carName: string,
    model: string,
    year: number
}

export const AddTodo = () => {
    const name: string = "Dinakaran"

    const [input, setInput] = useState<string>("");
    const cars: { carName: string, model: string, year?: number } = {
        carName: "Benz",
        model: "Auz",
        year: 2010
    };
    cars.year = 2023
    console.log(cars);

    const inputRef = useRef<HTMLInputElement>(null);

    let ourTuples: [number, string, boolean];
    ourTuples = [5, "Danny", true];
    ourTuples.push("Hacking")
    console.log(ourTuples);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
        console.log(name);
        const json = JSON.parse("89");
        console.log(typeof json);
        let names: string[] = [];
        names.push("Dinakaran", "Danny", "King");
        console.log(names);




    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form has been Submitted", input);
        setInput("");
    };
    return (
        <div>
            <h1>ADD TO DO</h1>
            <input
                type="text"
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="button" onClick={handleSubmit}>
                Submit
            </button>
            {ourTuples[1]}
        </div>
    );
};
