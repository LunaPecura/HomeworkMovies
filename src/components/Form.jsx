import React from 'react'
import { useState } from 'react'

function Form() {

	const [formInput, setFormInput] = useState("")

	return (
		<div><form>
			<input type="text" />
			<input type="submit" value="submit" />
		</form></div>
	)
}

export default Form
