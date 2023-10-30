export const Modal = ({name}) => {
    return (
        <div className="modal fade modal-xl" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 font-bold" id="exampleModalLabel" >Edit task</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <label htmlFor="">Project</label> <br />
                        <select name="" id="" className="w-full mt-2 border border-secondary-subtle" style={{ padding: 5, border: "1px solid black", borderRadius: 5 }} >
                            <option value="">{name}</option>
                        </select>
                        <label htmlFor="" className="mt-2">Task name</label><br />
                        <input type="text" className=" w-full mt-2 border border-secondary-subtle" style={{ border: "1px solid black", borderRadius: 5 }} />
                        <label htmlFor="" className="mt-2">Status</label><br />
                        <select name="" id="" className="w-full mt-2 border border-secondary-subtle" style={{ padding: 5, border: "1px solid black", borderRadius: 5 }} >
                            <option value="0">BACKLOG</option>
                            <option value="1">SELECTED</option>
                            <option value="2">IN PROGRESS</option>
                            <option value="3">DONE</option>
                        </select>
                        <div className="d-flex">
                            <div style={{ width: "80%" }}>
                                <label htmlFor="" className="mt-2">Priority</label><br />
                                <select name="" id="" className="w-full mt-2 border border-secondary-subtle" style={{ padding: 5, border: "1px solid black", borderRadius: 5 }} >
                                    <option value="">High</option>
                                </select>
                                <label htmlFor="" className="mt-2">Assignees</label><br />
                                <input type="text" placeholder="please select" className=" w-full border border-secondary-subtle mt-2" style={{ padding: 5, border: "1px solid black", borderRadius: 5 }} />
                                <label htmlFor="" className="mt-2">Original estimate</label><br />
                                <input type="text" className=" w-full border border-secondary-subtle mt-2" style={{ padding: 5, border: "1px solid black", borderRadius: 5 }} />


                            </div>
                            <div style={{ paddingLeft: 50 }}>
                                <div>
                                    <div className="me-5">
                                        <label htmlFor="" className="mt-2">Time spent</label><br />
                                        <input type="text" className=" w-full border border-secondary-subtle mt-2" style={{ padding: 5, border: "1px solid black", borderRadius: 5 }} />

                                    </div>
                                    <div>
                                        <label htmlFor="" className="mt-2">Time remaining</label><br />
                                        <input type="text" className=" w-full border border-secondary-subtle mt-2" style={{ padding: 5, border: "1px solid black", borderRadius: 5 }} />

                                    </div>
                                    <div>
                                        <label htmlFor="" className="mt-2">Members</label><br />
                                        <input type="number" className=" w-full border border-secondary-subtle mt-2" style={{ padding: 5, border: "1px solid black", borderRadius: 5 }} />

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-outline-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

