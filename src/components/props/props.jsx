import React from 'react'

export default function Props({user, btn = "Visit me"}) {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="w-full rounded-t-lg"
    />
  </figure>
  <div className="p-5">
    <h2 className="text-lg font-bold">{user}</h2>
    <p className="text-gray-700">If a dog chews shoes whose shoes does he choose?</p>
    <div className="mt-4 flex justify-end">
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
       {btn}
      </button>
    </div>
  </div>
</div>

  )
}
