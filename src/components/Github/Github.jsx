import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="text-center m-4 min-h-screen flex justify-center items-center text-white p-4 text-3xl">
      <div>
        Github followers: {data.followers}
        <div className="flex items-center justify-center my-8 ">
          <img
            src={data.avatar_url}
            alt="Git picture"
            className="w-[250px] rounded-full"
          />
        </div>
        <a
          href="https://github.com/hamza11067"
          className="p-4 bg-orange-400 font-normal text-[20px] rounded-md "
          target="_blank"
          rel="noreferrer"
        >
          Github Profile
        </a>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hamza11067");
  return response.json();
};
