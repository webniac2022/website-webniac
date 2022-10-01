import { motion } from "../lib/external-components";
import client from "../lib/apollo";
import { gql } from "@apollo/client";

function GDPR() {
  return (
    <div className="w-full mt-10 mb-10">
      <div className="flex flex-col items-center">
        <div className="">
          <h2 className="text-white dark:text-darkComponents font-bold text-xl sm:text-3xl md:text-5xl p-5"></h2>
        </div>
        <div>
          <p className="text-white dark:text-darkComponents font-bold text-sm sm:text-xl md:text-2xl p-5"></p>
        </div>
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const GET_GDPR = gql`
//     query GET_GDPR_DATA {
//       posts {
//         nodes {
//           gdpr {
//             gdpr {
//               content
//               title
//             }
//           }
//         }
//       }
//     }
//   `;
//   const gdprResp = await client.query({ query: GET_GDPR });
//   const gdprData = gdprResp?.data?.posts?.nodes[0]?.gdpr?.gdpr;
//   return { props: { data: gdprData } };
// }

export default GDPR;
