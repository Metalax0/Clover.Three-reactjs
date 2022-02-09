const MetalaxToDoLeft = () => {
    return(
        // Left Column Container
        <div className="column-left">
            <h1 className="content-title">
                <span className="text-no-color">TO</span> 
                <span className="text-color">DO</span>
                <span className="text-no-color">LIST</span>          
            </h1>

            <p className="description">
                <br />                
                To Do List is a list of tasks that needs to be completed, which is typically used for organizing and keeping track of activities. In this list, one can set a task, add new ones, mark it as complete or delete them. The current version of our list is front-end oriented which means that actions of the user are not saved and the list will reset on page refresh/reload. For now, the user cannot undo actions like deleting tasks or marking it as complete. 
                <br />
                <b>- Metalax</b>
            </p>
        </div>  
    );
}

export default MetalaxToDoLeft;