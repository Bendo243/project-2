export default function header() {
    return (
        <div>
             <header className="flex justify-between items-center bg-white p-4 shadow">
      <h1 className="text-xl font-semibold">Resource Report</h1>
      <div className="flex space-x-4">
        <button className="bg-gray-200 px-4 py-2 rounded">Refresh</button>
        <button className="bg-gray-200 px-4 py-2 rounded">Generate Report</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Add Reports</button>
      </div>
    </header>
        </div>
    )
}