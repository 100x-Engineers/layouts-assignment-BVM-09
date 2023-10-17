/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      minHeight: {
        "screen": "100dvh",
        "screen-small": "100svh",
        "screen-large": "100lvh"
      },
      margin: {
        '65': '260px',
      },
      strokeWidth: {
        '1.5': '1.5px',
      },
      backgroundImage: {
        'avatar': "url('../public/images/User_avatar.png')",
        'search': "url('../public/images/search.svg')",
        'x': "url('../public/images/signup-x.svg')",
        'tweetavatar': "url('../public/images/tweet-avatar.png')",


      },
      borderRadius: {
        '65': '65px',
        '30': '30px',
        '200': '200px',
      },
      backdropBlur: {
        23: '23.668209075927734px',
      },
      fontSize: {
        sm: '1rem',
        12: ['12px','24px'],
        14: ['14px','24px'],
        15: ['15px','24px'],
        26: '1.625rem',
        20: ['20px', '24px'], 
        48: ['48px', '24px'],
        31: ['31px', '24px'],
        24: ['24px', '24px'],
        16:['16px','24px'],

        '48px/bold': ['48px', 'bold'], 
      },
      colors: {
        neutral: {
          '50': '#F9F9F9',
          '100': '#F4F4F4',
          '200': '#E4E4E4',
          '300': '#D3D3D3',
          '400': '#A2A2A2',
          '500': '#737373',
          '600': '#525252',
          '700': '#404040',
          '800': '#262626',
          '900': '#171717',
          '950': '#0A0A0A',
          '1000': '#000000',
        },
        'twitterblue': '#1D9BF0',
        'twitterblue_for_hover': '#1871CA',
        'bluewash' : 'rgba(117, 190, 239, 0.2)',
        'buttonstroke':'#546A7A',
        'searchbarfill': '#212327',
        'cardfill': '#16181C',
        'success': '#00BE74',
        'error': '#8B141A',
        'secondary':'rgba(255, 255, 255, 0.60)',
        'stroke':'rgba(29, 155, 240, 0.24)',
      },
      boxShadow: {
        '3xl': '0px 8px 16px 0px rgba(0, 0, 0, 0.25)',
      },
      backdropBlur:{
        '23': '23.668209075927734px',
      },
      zIndex: {
        '10': '10',
        '20': '20',
        '30': '30',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize:{
        'Fsa':'48px',
        'Fsb':'2rem',
      },
      width: {
        '334': '20rem',
        '455': '28rem',
        '199': '12rem',
        '56':'55.23224px',
        '390': '24.375rem',
        '155': '9.719rem',
        '442': '27.625rem',
        '426': '426px',
        '434': '434px',
        '482': '482px',
        '223':'223px',
        '598': '598px',
        '348': '348px',
        '19' : '19px',
        '512':'512px',
        '14.564':'14.564px',
        '51.018':'51.018px',
        '136.129':'136.129px',
        '172':'172px',
        '367':'367px',
        '40.962':'40.962px',
        '12.27':'12.27px',
        '360':'360px',

      },
      height: {
        '58': '58px',
        '3': '3px',
        '39': '39px',
        '19' : '19px',
        '143': '143px',
        '355':'355px',
        '150':'150px',
        '14.564':'14.564px',
        '199':'199px',
        '145.238':'145.238px',
        '868':'868px',
        '18.026':'18.026px',
        '13.091':'13.091px',
        '824':'824px',
        
      },
      borderColor: {
        'color': 'var(--stroke, rgba(29, 155, 240, 0.24))',

      },
      spacing: {
        '100': '6.25rem',
        '15': '15px',
        '5px': '5px',

      },
      tranform: {
        '-translate-y-1/4': '-25%',
        'scale-75':'0.75',
      },
      padding: {
        '236.5': '14.781rem',
        '178.436': '11.152rem',
        '15': '15px',
        '9.5':'20px',
        '93': '5.813rem',
        '5': '5px',
        '247': '247px',
        '1.583': '1.583px',
        '1.782':'1.782px',
        '1.781':'1.781px',
        '1.583':'1.583px',
        '15': '15px',
        '161.936':'161.936',
      }
  },
  plugins: [],
}
}