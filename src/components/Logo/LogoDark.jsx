import React from 'react'

const LogoDark = ({ size, width, height }) => {
  return (
    <>
      {size === 'sm' ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={width}
          height={height}
          viewBox='0 0 79.086 90.824'
        >
          <g
            id='Dark_SM'
            data-name='Dark SM'
            transform='translate(-42.778 -15)'
          >
            <path
              id='Trazado_5'
              data-name='Trazado 5'
              d='M278.215,425.146l-2.4-3.2c-40.877-54.324-64.967-62.377-65.206-62.452l-3.783-1.189,2.281-7.6,3.8,1.124c1.059.312,26.415,8.314,69.3,65.3l2.4,3.2Z'
              transform='translate(-162.743 -320.25)'
              fill='#902df2'
            />
            <path
              id='Trazado_6'
              data-name='Trazado 6'
              d='M213.036,426.074l-7.515-2.745,1.373-3.757c22.726-62.212,64.761-81.864,66.539-82.67l3.643-1.652,3.3,7.287-3.638,1.649c-.5.229-40.851,19.328-62.332,78.131Z'
              transform='translate(-162.743 -320.25)'
              fill='#902df2'
            />
            <text
              id='g'
              transform='translate(45.908 86.295)'
              fill='#fff'
              fontSize={84}
              fontFamily='AirstrikeOutline, Airstrike Outline'
            >
              g
            </text>
          </g>
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={width}
          height={height}
          viewBox='0 0 197.051 90.824'
        >
          <g
            id='Dark_L'
            data-name='Dark L'
            transform='translate(-222.46 -483.176)'
          >
            <g id='Grupo_15' data-name='Grupo 15'>
              <path
                id='Trazado_7'
                data-name='Trazado 7'
                d='M295.154,573.072l-2.406-3.2c-40.877-54.324-64.967-62.377-65.2-62.452l-3.783-1.19,2.28-7.6,3.8,1.124c1.058.312,26.414,8.314,69.3,65.3l2.4,3.2Z'
                fill='#902df2'
              />
              <path
                id='Trazado_8'
                data-name='Trazado 8'
                d='M229.975,574l-7.515-2.745,1.372-3.757c22.727-62.212,64.761-81.864,66.539-82.67l3.644-1.652,3.3,7.287-3.637,1.648c-.5.23-40.852,19.329-62.333,78.132Z'
                fill='#902df2'
              />
            </g>
            <text
              id='gsei'
              transform='translate(227.511 554.398)'
              fill='#fff'
              fontSize={84}
              fontFamily='AirstrikeOutline, Airstrike Outline'
            >
              gsei
            </text>
          </g>
        </svg>
      )}
    </>
  )
}

export default LogoDark
