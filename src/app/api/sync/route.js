// Synchronization API to Get Data from One Source and Post to Another

export async function GET(request) {

    try {
        const response = await fetch("http://localhost:3000/api/adaptiveworks/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });
  
        // Check if the response status is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        // Parse the JSON
        const data = await response.json();
        console.log(data);
        
        const sync = await fetch("http://localhost:3000/api/mongodb", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            })

            const result = await sync.json()
            return Response.json({"message": "Synchronization Success"})
       
        
    } catch (error) {
        console.error('Error Syncing Data:', error);
          
    }
}
