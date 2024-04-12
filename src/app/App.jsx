import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCatInfo } from "../store/cats/catSlice";


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    fetch('./assets/list.json')
      .then(response => response.json())
      .then(data => {
        dispatch(setCatInfo(data));
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [dispatch]);

  return (
        <RouterProvider router={router} />
  )
}

export default App
