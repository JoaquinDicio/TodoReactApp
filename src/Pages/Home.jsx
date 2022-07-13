import React from 'react'
import Aside from '../components/Aside/Aside';
import Manager from "../components/Manager/Manager";

export default function Home() {
  return (
    <div className="d-flex">
        <Aside/>
        <Manager/>
    </div>
  )
}
