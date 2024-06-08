import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './component/Home'
import Slider from './component/slider/Slider'
import Detail from './component/detail/Detail'
import Detail1 from './component/detail/Detail1'
import Detail2 from './component/detail/Detail2'
import Detail3 from './component/detail/Detail3'
import Detail4 from './component/detail/Detail4'
const App = () => {



//     const route=createBrowserRouter ([
//         { path: '/',
//             element:<Home/>
//         },
//         { path: '/slider',
//           element:<Slider/>
//       },
//       { path: '/detail',
//         element:<Detail/>
//     },
//     { path: '/detail1',
//       element:<Detail1/>
//   }, { path: '/detail2',
//     element:<Detail2/>
// }, { path: '/detail3',
//   element:<Detail3/>
// }, { path: '/detail4',
//   element:<Detail4/>
// },


  //  ])
  return (
    <div className="App">

<BrowserRouter basename='/Test_friends'>
<Routes>
  <Route exact path="/Test_friends" element={<Home/>}></Route>
  <Route exact path="/slider" element={<Slider/>}></Route>
  <Route exact path="/detail" element={<Detail/>}></Route>
  <Route exact path="/detail1" element={<Detail1/>}></Route>
  <Route exact path="/detail2" element={<Detail2/>}></Route>
  <Route exact path="/detail3" element={<Detail3/>}></Route>
  <Route exact path="/detail4" element={<Detail4/>}></Route>
</Routes>

</BrowserRouter>


    </div>
  )
}

export default App
