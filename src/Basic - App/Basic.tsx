import React from "react";

const Basic = () => {
    const userName: string = "Dinakaran";
    const numberData: number = 20;
    let testStringNumber:
        | string
        | number = `String ${userName} number${numberData} ${true}`;
    let age: number = 30;
    // ARRAY
    let arrString: string[] = ["Dinakaran", "Dev", "King"];
    arrString.push("KOng");
    console.log(arrString);

    let arrNumber: number[];
    arrNumber = [1, 90, 40, 5, 38, 60];
    console.log(arrNumber);

    let testStringOrNumber: (string | number)[]
    testStringOrNumber = ["Vaishnavi", 23, "Dinakaran", 24]

    // OBJECT
    let userData = {
        fullName: "Dinakaran",
        userAge: 24,
        isAdmin: false,
        phone: 233456789,
        // phone?:string is we use this either the phone will present of not
    }

    // ANY its will be in any type
    let textAny: any;
    textAny = "Dinakaran"

    // FUNCTIONS

    const first = () => {
        console.log(textAny);
    }

    let functionReturn = (): string => {
        console.log("Function call");
        return "King"
    }

    const multiple = (num: number) => {
        return num * 2

    }
    type myFuc = (a: number, b: number) => void

    let write: myFuc = (num, str) => {
        console.log(num + "times" + str);

    }


    // TYPE ALIASES
    type UserTypes = {
        userName: string,
        ageUser: number,
        phone?: number
    }

    const typeAliases = (user: UserTypes) => {
        console.log(user.userName);

    }




    return (
        <>
            <div>Name :{userName}</div>
            <div>Age :{age}</div>
            <div>numberData :{numberData}</div>
            <div>testStringNumber :{testStringNumber}</div>
            <b>ArrString :{arrString}</b><br />
            <b>ArrNumber :{arrNumber}</b><br />
            <i>ArrNumber :{testStringOrNumber}</i><br />
            <i>userData Object :{userData.fullName}</i><br />
            <i>textAny ANY :{textAny}</i><br />
            <button onClick={functionReturn}>FUNCTION {textAny}</button>
            {/* <button<HTMLButtonElement> onClick ={typeAliases}>multiple</button> */}
        </>
    );
};

export default Basic;
