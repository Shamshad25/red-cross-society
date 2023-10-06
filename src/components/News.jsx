import { Button, Typography } from "@material-tailwind/react";
import newsImg from "../assets/newsImg.png";

const datas = [
  {
    date: "29 July",
    header: "Education for under priviledged",
    para: "Proin cras id semper tellus euismod aenean est a egestas. Rutrum in ipsum vivamus nunc dignissim sit...",
  },
  {
    date: "11 Feb",
    header: "Lorem ipsum dolor sit amet consectetur.",
    para: "Proin cras id semper tellus euismod aenean est a egestas. Rutrum in ipsum vivamus nunc dignissim sit...",
  },
  {
    date: "29 July",
    header: "Et faucibus consectetur proin leo neque bibendum.",
    para: "Proin cras id semper tellus euismod aenean est a egestas. Rutrum in ipsum vivamus nunc dignissim sit...",
  },
];

const News = () => {
  return (
    <section id="news" className="py-10 grid grid-cols-2 bg-red-50">
      <div className=" flex flex-col items-end">
        <div className="w-2/3 h-full pr-4">
          <div className="flex items-center gap-2">
            <Typography variant="paragraph" className="font-serif font-bold">
              News and Events
            </Typography>
            <hr className=" h-0.5 w-20 bg-gray-300" />
          </div>
          <Typography variant="h1" className="font-serif">
            Read about us & events we’ve organized
          </Typography>
          <div className="w-full bg-blue-300 relative">
            <div className="w-16 bg-red-100 absolute text-center">
              <Typography variant="lead" className="font-serif font-bold">
                30th July
              </Typography>
            </div>
            <img src={newsImg} alt="news" />
          </div>
          <Typography variant="lead" className="py-4">
            Volunteer loses hope, Continues to help
          </Typography>
          <Typography variant="small">
            Proin cras id semper tellus euismod aenean est a egestas. Rutrum in
            ipsum vivamus nunc dignissim sit...
          </Typography>
          <Typography variant="paragraph" color="red" className="py-4">
            Read This
          </Typography>
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <div className="w-2/3">
          <div className="flex justify-end  py-8">
            <Button color="red">More News</Button>
          </div>
          <div className="pt-8">
            {datas.map((data, i) => {
              return (
                <div
                  key={i}
                  className=" py-8 flex justify-center items-center gap-4 border-b-2 border-gray-500 pb-8"
                >
                  <div className="py-2 px-3  bg-gray-300">
                    <Typography className="font-serif font-bold">
                      {data.date}
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="paragraph" className="font-bold">
                      {data.header}
                    </Typography>
                    <Typography variant="small">{data.para}</Typography>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
