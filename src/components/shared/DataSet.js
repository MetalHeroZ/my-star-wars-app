import React, { Fragment } from 'react'

export default function DataSets({ dataset }) {
  return (
    <Fragment>
      {dataset.map(data => (
        <div className="info" key={data.label + data.value}>
          <div className="flex justify-center items-center">
            <div className="flex w-9 h-full justify-center items-center mr-3">            
              <i className={`${data.icon} text-3xl text-gray-700`}></i>
            </div>
            <div className="flex-1">
              <div className="info__label">{data.label}</div>
              <div className="info__value">{data.value}</div>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  )
}
