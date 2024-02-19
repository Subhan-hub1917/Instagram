const Loading = () => {
    return ( 
        <div className="container height-100vh">
            <div className="row justify-content-center height-100vh "> 
                <div className="col-4 d-flex flex-column height-100vh align-items-center">
                    <div className="height-75vh display-1 d-flex align-items-center ">
                        <i className="bi bi-instagram text-danger"></i>
                    </div>
                    <div className="d-flex p-3 height-25vh text-center">
                        <div>
                            <p>From</p>
                            <div className="h5 text-danger d-flex">
                                <i className="bi bi-meta"></i>
                                <p className="ms-1">Meta</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loading;
