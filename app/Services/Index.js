import { gql, request } from 'graphql-request'
const MASTER_URL ="https://api-ap-south-1.hygraph.com/v2/clx1cf5q101ig07v1mxpl4ht5/master"

export const getCourseList=async(level)=>{
    const query=gql`
    query CourseList {
        courses(where: {level: `+level+`}) {
          id
          name
          price
          level
          tags
          time
          author
          banner {
            url
          }
          chapter {
            id
          }
        }
      }
      
      `
      const result=await request(MASTER_URL,query);
      return result;
}