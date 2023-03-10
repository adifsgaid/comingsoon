import React from 'react'
import classnames from 'clsx'

export function NewsletterForm({ className, onSubmit, submitBtn }) {
  const [email, setEmail] = React.useState('')
  const [success, setSuccess] = React.useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    const result = await onSubmit(email)
    console.log(result)
    setEmail('')
    setSuccess(true)
  }

  function handleChange(event) {
    setEmail(event.target.value)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={classnames('newsletter-form is-revealing md:flex', className)}
    >
      <div className="mr-2 flex-shrink flex-grow">
        <label className="hidden" htmlFor="email" aria-hidden="true">
          Email
        </label>
        <input
          required
          placeholder="Your best email&hellip;"
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          autoComplete="off"
          className="mb-10 w-[140px] rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none lg:w-full"
        />
        {success && (
          <div className="mt-2 text-xs italic text-gray-500">
            Email submitted successfully!
          </div>
        )}
      </div>

      <div className="control">
        <button
          className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-primary-500 to-primary-400 py-4 px-7 text-center font-medium leading-4 text-white no-underline shadow-lg"
          type="submit"
        >
          {submitBtn || 'Submit'}
        </button>
      </div>
    </form>
  )
}
