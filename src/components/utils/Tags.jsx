import React, { useEffect, useState } from "react";
import Tagify from "@yaireo/tagify";

const Tags = (props) => {
    let options = {
        name: "tags",
        id: "input_tags",
        value: "",
        placeholder: "",
        onChange: () => { },
    };
    options = { ...options, ...props }

    const handleChange = (e) => {
        let dts = e.target.value;
        document.getElementById("tags_value").value = JSON.parse(dts)
            .map((dt) => dt.value)
            .join(",");
    };

    useEffect(() => {
        setTimeout(() => {
            const t = document.querySelector("#" + options.id);
            t && new Tagify(t);
        }, 100);
    }, []);

    return (
        <>
            <input
                type="text"
                placeholder={options.placeholder}
                id={options.id}
                defaultValue={props.value}
                className="form-control mb-2"
                onChange={(e) => {
                    handleChange(e);
                }}
            />

            <input
                id="tags_value"
                type="hidden"
                name={options.name}
                defaultValue={props.value}
                onChange={(e) => {
                    options.onChange(e);
                }}
            />
        </>
    );
};

export default Tags;
