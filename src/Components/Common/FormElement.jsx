function Inputbox({ label, Placeholder, inputType }) {
    return (
        <>
            <div className="mb-2 px-3">
                <label htmlFor={label.replace(/\s+/g, '-')} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
                <input type={inputType} id={label.replace(/\s+/g, '_')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={Placeholder} required />
            </div>
        </>
    )
}

function Selectinput({ label, selected, value }) {

    return (
        <div class="max-w-full mx-3 mb-2">
            <label for={label} class="block mb-2 text-sm font-medium text-gray-900">{label}</label>
            <select id={label} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>{selected}</option>
                {value.map((value, index) => {
                    return (
                        <option value={value} key={index}>{value}</option>
                    )
                })}
            </select>
        </div>
    )
}

function Textarea({label}) {
    return (
        <div class="max-w-full mx-3 mb-2">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900">{label}</label>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 " placeholder="Write your thoughts here..."></textarea>
        </div>
    )
}

function PurpleButton({ BtnName }) {
    return (
        <>
            <button type="submit" className="focus:outline-none mx-3 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">{BtnName}</button>
        </>
    )
}

export { Inputbox, PurpleButton, Selectinput, Textarea }