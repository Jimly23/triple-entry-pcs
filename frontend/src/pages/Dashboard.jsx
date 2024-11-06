import React from "react";
import Button from "../components/atoms/Button";
import {MdDashboard} from 'react-icons/md'

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-6">
        <div className="col-span-1 sidebar h-screen bg-blue-900">
          <h3 className="font-medium text-xl text-white p-5">
            Triple Entry PCS
          </h3>
          <ul className="mt-3 font-medium text-lg p-2">
            <li className="text-white hover:bg-slate-500 cursor-pointer py-3 px-4 rounded flex items-center gap-x-2">
              <MdDashboard size={25}/>
              Dashboard
            </li>
          </ul>
        </div>
        <div className="col-span-5 bg-slate-50 p-5">
          <>
            <>
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-medium text-3xl">Triple Entry Dashboard</h3>
                <div className="flex items-center gap-x-2">
                  <Button style={'bg-white border border-blue-900 text-blue-900'} text={"New Transaction"} />
                  <Button text={"Refresh Data"} />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-x-5 pb-10 pt-2">
                <div className="rounded-lg bg-white border w-full h-[100px] flex items-center gap-x-3 p-5">
                  <div>
                    <p className="font-medium mb-1">Current Balance</p>
                    <h5 className="text-2xl">Rp30.000.000</h5>
                  </div>
                </div>
                <div className="rounded-lg bg-white border w-full h-[100px] flex items-center gap-x-3 p-5">
                  <div>
                    <p className="font-medium mb-1">Verified Entries</p>
                    <h5 className="text-2xl">156</h5>
                  </div>
                </div>
                <div className="rounded-lg bg-white border w-full h-[100px] flex items-center gap-x-3 p-5">
                  <div>
                    <p className="font-medium mb-1">Pending Verification</p>
                    <h5 className="text-2xl">3</h5>
                  </div>
                </div>
                <div className="rounded-lg bg-white border w-full h-[100px] flex items-center gap-x-3 p-5">
                  <div>
                    <p className="font-medium mb-1">Smart Contract Status</p>
                    <h5 className="text-2xl">Active</h5>
                  </div>
                </div>
              </div>
            </>
            <>
              <div className="grid grid-cols-2 gap-x-5 pb-10 pt-2 h-[300px]">
                <div className="rounded-lg bg-white border w-full h-full flex items-center gap-x-3 p-5">
                </div>
                <div className="rounded-lg bg-white border w-full h-full flex items-center gap-x-3 p-5">
                </div>
              </div>
            </>
            <>
              <h3 className="font-medium text-xl mb-2">Latest Transaction</h3>
              <div className="w-full bg-white rounded-xl p-5 shadow-sm mb-2">
                <div className="header grid grid-cols-6 font-medium text-slate-700">
                  <h6>Timestamp</h6>
                  <h6>Description</h6>
                  <h6>Debit</h6>
                  <h6>Credit</h6>
                  <h6>Hash</h6>
                  <h6>Status</h6>
                </div>
              </div>
              <div className="w-full bg-white rounded-xl p-5 shadow-sm">
                <div className="grid grid-cols-6 text-slate-700 border-b pb-3">
                  <p>2024-11-05 10:30</p>
                  <p>Pembelian Alat Tulis Kantor</p>
                  <p>Rp3.000.000</p>
                  <p>-</p>
                  <p>0xabc1234def5678ghijklmn</p>
                  <p>Verified</p>
                </div>
                <div className="grid grid-cols-6 text-slate-700 border-b py-3">
                  <p>2024-11-05 10:30</p>
                  <p>Pembelian Alat Tulis Kantor</p>
                  <p>Rp3.000.000</p>
                  <p>-</p>
                  <p>0xabc1234def5678ghijklmn</p>
                  <p>Verified</p>
                </div>
                <div className="grid grid-cols-6 text-slate-700 py-3">
                  <p>2024-11-05 10:30</p>
                  <p>Pembelian Alat Tulis Kantor</p>
                  <p>Rp3.000.000</p>
                  <p>-</p>
                  <p>0xabc1234def5678ghijklmn</p>
                  <p>Verified</p>
                </div>
              </div>
            </>
          </>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
