import React, { Component } from 'react'
import './Add.css'

export default class Add extends Component {
    state = {
        title: null,
        format: null,
        author: null,
        topic1: null,
        topic2: null,
        topic3: null,
        description: null
    }


    render() {
        return (
            <div>
                <h1>This Will Allow Users To Add New Entries</h1>
                <form>
                    <label>
                        Title: <input type='text' name='title' />
                    </label>
                </form>
                <form>
                    <label>
                        Author: <input type='text' name='author' />
                    </label>
                </form>
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
                <form>
                    <label>
                        Topic 1:
                        <select>
                            <option value='database option'>Will come from Database</option>
                        </select>
                    </label>
                </form>
                <form>
                    <label>
                        Topic 2(Optional):
                        <select>
                            <option value='database option2'>Will come from Database</option>
                        </select>
                    </label>
                </form>
                <form>
                    <label>
                        Topic 3(Optional):
                        <select>
                            <option value='database option3'>Will come from Database</option>
                        </select>
                    </label>
                </form>
                <form>
                    <label>
                        Description: <input className='description-input' type='text' name='descr' />
                    </label>
                </form>
            </div>
        )
    }
}
