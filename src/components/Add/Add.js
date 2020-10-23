import React, { useState } from 'react'
import './Add.css'

const Add = () => {
    const [title, setTitle] = useState('')
    const [format, setFormat] = useState('')
    const [author, setAuthor] = useState('')
    const [topic1, setTopic1] = useState('')
    const [topic2, setTopic2] = useState('')
    const [topic3, setTopic3] = useState('')
    const [description, setDescription] = useState('')



    return (
        <div>
            <h1>This Will Allow Users To Add New Entries</h1>
            <form>
                <label>
                    Format:
                        <select>
                        <option value='Movie'>Movie</option>
                        <option value='Music'>Music</option>
                        <option value='Book'>Book</option>
                        <option value='TV'>TV</option>
                    </select>
                </label>
            </form>
        </div>
    )

}
export default Add;
