import React from 'react'

export default function AddTV() {
    return (
        <div>
                        <form>
                <label>
                    Show Title: <input type='text' name='show_title' />
                </label>
            </form>
            <form>
                <label>
                    Episode Title: <input type='text' name='episode_title' />
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
                <textarea className='description-input' value='descr'>
                    Description
                </textarea>
            </form>

        </div>
    )
}
