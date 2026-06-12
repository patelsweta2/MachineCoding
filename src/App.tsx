import { Routes, Route } from "react-router-dom"
import Todo from "./Pages/Todo";
import Home from "./Pages/Home";
import Accordion from "./Pages/Accordion";
import Carousel from "./Pages/Carousel";
import ChipsInput from "./Pages/ChipsInput";
import FileExplorer from "./Pages/FileExplorer";
import GridLights from "./Pages/GridLights";
import InfiniteScroll from "./Pages/InfiniteScroll";
import KanbanBoard from "./Pages/KanbanBoard";
import MatchPair from "./Pages/MatchPair";
import MeetingCalendar from "./Pages/MeetingCalendar";
import NestedComments from "./Pages/NestedComments";
import OTPInput from "./Pages/OTPInput";
import QuizApp from "./Pages/QuizApp";
import ShapeDrawer from "./Pages/ShapeDrawer";
import Stopwatch from "./Pages/Stopwatch";
import ToastPopup from "./Pages/ToastPopup";
import TrafficLights from "./Pages/TrafficLights";
import StarRating from "./Pages/StarRating";
import TransferList from "./Pages/TransferList";
import WordConnect from "./Pages/WordConnect";
import MainLayout from "./layout/MainLayout";
function App() {

  return (

    <Routes>
      <Route element={<MainLayout />}>

      <Route path="/" element={<Home />} />
      <Route
        path="/todo-app"
        element={<Todo />}
      />
      <Route
        path="/accordion"
        element={<Accordion />}
      />
      </Route>
    </Routes>

  )
}

export default App
