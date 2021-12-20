

const CheckBoxGroup = ({ options, value, onChange, checkBoxGroupClassName, checkBoxLabelBefore, ...props }) => {
    const handleChange = ev => {
        const { name, checked, value: optionValue } = ev.target;
        onChange({
            target: {
                name,
                value: checked ?
                    [...value, optionValue]
                    :
                    value.filter(v => v !== optionValue),
            },
        });
    };

    return (
        <div className={checkBoxGroupClassName}>
            {options.map(option => (
                <div className="control" key={option}>
                    {
                        checkBoxLabelBefore ?
                            <label className="checkbox">{option}{" "}
                                <input
                                    type="checkbox"
                                    value={option}
                                    checked={value.includes(option)}
                                    onChange={handleChange}
                                    {...props}
                                />
                            </label>
                            :
                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    value={option}
                                    checked={value.includes(option)}
                                    onChange={handleChange}
                                    {...props}
                                />{" "}{option}
                            </label>
                    }

                </div>
            )
            )}

        </div>
    )
}

export default CheckBoxGroup
