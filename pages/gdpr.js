import client from "../lib/apollo";
import { gql } from "@apollo/client";

function GDPR({ data: { title, content } }) {
  return (
    <div className="w-full mt-10 mb-10">
      <div className="flex flex-col items-center">
        <div className="">
          <h2 className="text-white dark:text-darkComponents font-bold text-xl sm:text-3xl md:text-5xl p-5">
            {title}
          </h2>
        </div>
        <div>
          <div
            className="text-white dark:text-darkComponents font-bold text-sm sm:text-xl md:text-2xl p-5"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const GET_GDPR = gql`
    query GetNodeByUri($uri: String!) {
      nodeByUri(uri: $uri) {
        __typename
        ...Page
      }
    }
    fragment Page on Page {
      title
      content
    }
  `;
  const gdprResp = await client.query({
    query: GET_GDPR,
    variables: { uri: "/gdpr/" },
  });
  const gdprData = gdprResp?.data?.nodeByUri;
  return { props: { data: gdprData } };
}

export default GDPR;
