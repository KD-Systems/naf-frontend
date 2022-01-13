import React, { useEffect, useState } from "react";
import Tagify from "@yaireo/tagify";

const Tags = (props) => {
    let options = {
        ...{ name: "tags", id: "input_tags", value: "", placeholder: "", onChange: () => { } },
        ...props,
    };

    const handleChange = (e) => {
        let dts = e.target.value
        document.getElementById('tags_value').value = JSON.parse(dts).map(dt => dt.value).join(',')
    }

    useEffect(() => {
        setTimeout(() => {
            const t = document.querySelector("#" + options.id);
            t && new Tagify(t);
        }, 500);
    }, [])

    return (
        <>
            <input
                type="text"
                placeholder={options.placeholder}
                id={options.id}
                defaultValue={options.value}
                className="form-control mb-2"
                onChange={(e) => { handleChange(e) }}
            />

            <input id="tags_value" type="hidden" name={options.name} defaultValue={options.value} onChange={(e) => { options.onChange(e) }} />
        </>
    );
};

export default Tags;
