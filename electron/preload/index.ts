function domReady(condition: DocumentReadyState[] = ['complete', 'interactive']) {
  return new Promise(resolve => {
      console.log('111',document.readyState);
    if (condition.includes(document.readyState)) {
      resolve(true)
    } else {
      document.addEventListener('readystatechange', () => {
        if (condition.includes(document.readyState)) {
          console.log('222',document.readyState);
          resolve(true)
        }
      })
    }
  })
}

const safeDOM = {
  append(parent: HTMLElement, child: HTMLElement) {
    if (!Array.from(parent.children).find(e => e === child)) {
      return parent.appendChild(child)
    }
  },
  remove(parent: HTMLElement, child: HTMLElement) {
    if (Array.from(parent.children).find(e => e === child)) {
      return parent.removeChild(child)
    }
  },
}

/**
 * https://tobiasahlin.com/spinkit
 * https://projects.lukehaas.me/css-loaders
 * https://matejkustec.github.io/SpinThatShit
 */
function useLoading() {

  // loading1
  const oStyle = document.createElement('style')
  const oDiv = document.createElement('div')
  const html = `
    <div class="loading-wrapper">
      <div class="loading-view">
        <div class="container1">
        <div class="circle circle1"></div>
        <div class="circle circle2"></div>
        <div class="circle circle3"></div>
        <div class="circle circle4"></div>
        </div>
        <div class="container2">
            <div class="circle circle1"></div>
            <div class="circle circle2"></div>
            <div class="circle circle3"></div>
            <div class="circle circle4"></div>
        </div>
      </div>
      <div class="tip-view">
        加载中...
      </div>
    </div>
  `;

  const styleContent =`
    .loading-wrapper {
      width: 100px;
      height: 100px;
      background-color: rgba(0, 0, 0, 0.8);
      border-radius: 10px;
      color: #fff;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .loading-view {
      height: 40px;
      position: relative;
    }
    .container1,
.container2 {
    width: 40px;
    height: 40px;
    position: absolute;
    /* border: 1px solid #ff0000; */
    top: 0;
    left: 50%;
    margin-left: -20px;
    position: absolute;
}

.container2 {
    transform: rotate(45deg);
}
.circle {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #fff;
    border-radius: 50%;
    /* 设置小球动画 */
    animation: loading 1.2s both infinite;
}

/* 设置小球的相对位置 */
.circle1 {
    top: 0;
    left: 0;
}

.circle2 {
    top: 0;
    right: 0;
}

.circle3 {
    bottom: 0;
    right: 0;
}

.circle4 {
    bottom: 0;
    left: 0;
}

/* 设置延时 */
.container1 .circle1 {
    animation-delay: 0s;
}

.container2 .circle1 {
    animation-delay: 0.2s;
}

.container1 .circle2 {
    animation-delay: 0.3s;
}

.container2 .circle2 {
    animation-delay: 0.4s;
}

.container1 .circle3 {
    animation-delay: 0.5s;
}

.container2 .circle3 {
    animation-delay: 0.6s;
}

.container1 .circle4 {
    animation-delay: 0.7s;
}

.container2 .circle5 {
    animation-delay: 0.8s;
}

@keyframes loading {
    0% {
        transform: scale(0);
    }

    40% {
        transform: scale(1);
    }

    80% {
        transform: scale(0);
    }

    100% {
        transform: scale(0);
    }
}

  `
  
oDiv.innerHTML = html;
oStyle.id = 'app-loading-style'
oStyle.innerHTML = styleContent

  // loading2
//   const oStyle = document.createElement('style')
//   const oDiv = document.createElement('div')
//   const html = `
//     <div class="loading-wrapper">
//       <div class="loading-view">
//         <div class="bounce-view">
//           <div class="bounce bounce1"></div>
//           <div class="bounce bounce2"></div>
//           <div class="bounce bounce3"></div>
//         </div>
//       </div>
//       <div class="tip-view">
//         加载中...
//       </div>
//     </div>
//   `;

//   const styleContent =`
//     .loading-wrapper {
//       width: 100px;
//       height: 100px;
//       background-color: rgba(0, 0, 0, 0.8);
//       border-radius: 10px;
//       color: #fff;
//       text-align: center;
//       display: flex;
//       flex-direction: column;
//       justify-content: space-evenly;
//       position: absolute;
//       left: 50%;
//       top: 50%;
//       transform: translate(-50%, -50%);
//     }
//     .loading-view {
//       height: 40px;
//       position: relative;
//     }
//     .bounce-view {
//       position: absolute;
//       left: 50%;
//       top: 50%;
//       transform: translate(-50%, -50%);
//   }
  
//   .bounce {
//       /* 设置小球形状的样式几乎和type=1一样，重复利用了 */
//       display: inline-block;/* 设置小球的布局 */
//       width: 10px;
//       height: 10px;
//       background-color: #fff;
//       border-radius: 50%;
//       /* 设置小球动画 */
//       animation: loading 1.2s both infinite;
//   }
  
//   /* 设置延迟 */
//   .bounce1 {
//       animation-delay: -0.32s;
//   }
  
//   .bounce2 {
//       animation-delay: -0.16s;
//   }
  
//   .bounce3 {
//       animation-delay: 0s;
//   }
//   @keyframes loading {
//     0% {
//         transform: scale(0);
//     }

//     40% {
//         transform: scale(1);
//     }

//     80% {
//         transform: scale(0);
//     }

//     100% {
//         transform: scale(0);
//     }
// }
  
//   `
// oDiv.innerHTML = html;
// oStyle.id = 'app-loading-style'
// oStyle.innerHTML = styleContent

  // loading3
//   const oStyle = document.createElement('style')
//   const oDiv = document.createElement('div')
//   const html = `
//     <div class="loading-wrapper">
//       <div class="loading-view">
//         <div class="wave">
//           <div class="react react1"></div>
//           <div class="react react2"></div>
//           <div class="react react3"></div>
//           <div class="react react4"></div>
//           <div class="react react5"></div>
//         </div>
//       </div>
//       <div class="tip-view">
//         加载中...
//       </div>
//     </div>
//   `;

//   const styleContent =`
//     .loading-wrapper {
//       width: 100px;
//       height: 100px;
//       background-color: rgba(0, 0, 0, 0.8);
//       border-radius: 10px;
//       color: #fff;
//       text-align: center;
//       display: flex;
//       flex-direction: column;
//       justify-content: space-evenly;
//       position: absolute;
//       left: 50%;
//       top: 50%;
//       transform: translate(-50%, -50%);
//     }
//     .loading-view {
//       height: 40px;
//       position: relative;
//     }
//     .wave {
//       width: 100px;
//       height: 40px;
//       position: absolute;
//       left: 50%;
//       top: 50%;
//       transform: translate(-50%,-50%);
//       display: flex;
//       justify-content: space-evenly;
//     }

//     .react{
//       width: 3px;
//       height: 40px;
//       background-color: #fff;
//       animation: waveLoading 1.2s both infinite;
//     }

//     /* 设置延时 */
//     .react1{
//       animation-delay: 0s;
//     }
//     .react2{
//       animation-delay: -1.1s;
//     }
//     .react3{
//       animation-delay: -1.0s;
//     }
//     .react4{
//       animation-delay: -0.9s;
//     }
//     .react5{
//       animation-delay: -0.8s;
//     }

//     @keyframes waveLoading{
//       0% {
//           transform: scaleY(0.4);
//       }
//       20% {
//           transform: scaleY(1);
//       }
//       80% {
//           transform: scaleY(0.4);
//       }
//       100% {
//           transform: scaleY(0.4);
//       }
//     }
//   `
// oDiv.innerHTML = html;
// oStyle.id = 'app-loading-style'
// oStyle.innerHTML = styleContent

  return {
    appendLoading() {
      safeDOM.append(document.head, oStyle)
      safeDOM.append(document.body, oDiv)
    },
    removeLoading() {
      safeDOM.remove(document.head, oStyle)
      safeDOM.remove(document.body, oDiv)
    },
  }
}

// ----------------------------------------------------------------------

const { appendLoading, removeLoading } = useLoading()
domReady().then(appendLoading)

window.onmessage = (ev) => {
  console.log('Received message:', ev.data.payload);
  ev.data.payload === 'removeLoading' && removeLoading()
}
