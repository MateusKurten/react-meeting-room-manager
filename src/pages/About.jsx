export default function About() {

    return (
        <div className="mx-auto p-8">
          <h1 className="text-3xl font-bold mb-4">Meeting Room Manager</h1>
          <p className="mb-8">
            Welcome to the Meeting Room Manager. This project was created as an introduction to React and aims to provide a simple application for managing events in a meeting room.
          </p>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Key Features:</h2>
            <ol className="pl-6">
              <div>Addition of events to the meeting room</div>
              <div>Listing of scheduled events</div>
              <div>Deletion of existing events</div>
            </ol>
          </div>
    
          <div className="mb-8">
            <h2 className="text-2xl font-bold">How to Use:</h2>
            <ol className="pl-6">
              <div>Register or log in to access the system.</div>
              <div>Navigate to the event management section.</div>
              <div>Add new events, view the list, or remove existing events.</div>
            </ol>
          </div>
        </div>
      );
    };
