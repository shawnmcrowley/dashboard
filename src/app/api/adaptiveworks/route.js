// Route to Adaptive Works API with both GET and POST Operations and uses Winston Logging
// To do GET Method for Adaptive Works Data



import logger from "@/app/logger";

export async function GET() {

    const res = await fetch("https://pokeapi.co/api/v2/pokemon/")

    const data = await res.json()
    logger.info("Called GET Method Of AdaptiveWorks API")
    console.log(data)
    return Response.json(data)

}


export async function POST() {

    const myHeaders = new Headers();
    myHeaders.append("Authorization",process.env.ADAPTIVE_WORKS_API_KEY)
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
        "typeName": "Milestone",
        "fields": [
          "C_MilestoneDescription",
          "C_MilestoneOwner",
          "C_Notes",
          "C_Plant",
          "C_ResourceAssignment",
          "C_ResourceAssignment",
          "C_ResourceSignOff",
          "CreatedOn",
          "Description",
          "DueDate",
          "EntityOwner",
          "EntityType",
          "Name",
          "ParentProject",
          "PercentCompleted",
          "Project",
          "SYSID",
          "StartDate",
          "State"
        ],
        "orders": [
          {
            "fieldName": "SYSID",
            "order": "Descending"
          }
        ],
        "paging": {
          "limit": 150
        }
      });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
   const res = await fetch("https://api.clarizentb.com/v2.0/services//data/entityQuery", requestOptions)
   const data = await res.json()
   console.log(data)
   logger.info("Called POST Method Of AdaptiveWorks API")
   return Response.json(data)
}
