import { Fragment as ReactFragment } from 'react';
import Box from '../../Box';
import Accordion from './Accordion';

function QASection({ img, data, className }) {
  return (
    <Box title={data.title} className={`my-[61px] ${className}`}>
      <div className="flex flex-row items-center">
        {img && (
          <div className=" self-stretch w-[80%] p-10">
            <img
              src={img}
              alt=""
              className="border-white/50 border-[1px] w-[100%] h-[100%]"
            />
          </div>
        )}
        <div>
          {data.questions.map(({ q, a }, i, arr) => (
            // eslint-disable-next-line react/no-array-index-key
            <ReactFragment key={i}>
              <Accordion title={q} content={a} />
              {i !== arr.length - 1 && (
                <div className="border-b-[1px] border-white/50 mt-[40px] mb-[40px]" />
              )}
            </ReactFragment>
          ))}
        </div>
      </div>
    </Box>
  );
}

export default QASection;
