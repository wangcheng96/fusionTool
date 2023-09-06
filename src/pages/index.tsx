import { Link, Outlet } from "react-router-dom";

const Index=()=>{
  return (
    <nav>
      <ul>
        <li>
          <Link to="/shotScreen">截图</Link>
        </li>
        <li>
          <Link to="/recorderVideo">录像</Link>
        </li>
        <li>
          <Link to="/recorderAudio">录音</Link>
        </li>
        <li>
          <Link to="/recorderScreen">录屏</Link>
        </li>
      </ul>
      <Outlet />
    </nav>
  )
}

export default Index