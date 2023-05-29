import { css } from '@emotion/css';
import { Cake, Email, Phone, Public, Room } from '@mui/icons-material';
import { ThemeConfig } from '@reactive-resume/schema';
import clsx from 'clsx';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import { useMemo } from 'react';

import Markdown from '@/components/shared/Markdown';
import { useAppSelector } from '@/store/hooks';
import DataDisplay from '@/templates/shared/DataDisplay';
import { formatDateString } from '@/utils/date';
import getProfileIcon from '@/utils/getProfileIcon';
import { getContrastColor } from '@/utils/styles';
import { addHttp, formatLocation, getPhotoClassNames } from '@/utils/template';

export const MastheadSidebar: React.FC = () => {
  const dateFormat: string = useAppSelector((state) => get(state.resume.present, 'metadata.date.format'));
  const { name, photo, email, phone, birthdate, location, placeofbirth, genderandnationality } = useAppSelector(
    (state) => state.resume.present.basics
  );
  const theme: ThemeConfig = useAppSelector((state) => get(state.resume.present, 'metadata.theme', {} as ThemeConfig));
  const contrast = useMemo(() => getContrastColor(theme.primary), [theme.primary]);
  const color = useMemo(() => (contrast === 'dark' ? theme.text : theme.background), [theme, contrast]);

  return (
    <div className="col-span-2 grid justify-items-start gap-3 px-4 pt-4">
      {photo.visible && !isEmpty(photo.url) && (
        <img
          alt={name}
          src={photo.url}
          width={photo.filters.size}
          height={photo.filters.size}
          className={getPhotoClassNames(photo.filters)}
        />
      )}

      <div className={clsx({ invert: contrast === 'light' })}>
        <h1 className="mb-1">{name}</h1>
        {/* <p className="opacity-75">{headline}</p> */}
      </div>

      <div className={clsx('flex flex-col gap-2.5', css(`svg { color: ${color} }`))}>
        
        <DataDisplay
        //  icon={<Cake />} 
         className="!gap-2 text-xs" textClassName={clsx({ invert: contrast === 'light' })}> <div><p><b>D.O.B:</b></p></div>
          {birthdate}
        </DataDisplay>

        <DataDisplay
          // icon={<Email />}
          className="!gap-2 text-xs"
          link={`mailto:${email}`}
          textClassName={clsx({ invert: contrast === 'light' })}
        > <div><p><b>EMAIL:</b></p></div>
          {email}
        </DataDisplay>

        <DataDisplay
          // icon={<Phone />}
          className="!gap-2 text-xs"
          link={`tel:${phone}`}
          textClassName={clsx({ invert: contrast === 'light' })}
        > <div><p><b>PHONE:</b></p></div>
          {phone}
        </DataDisplay>

        <DataDisplay 
        // icon={<Room />} 
        className="!gap-2 text-xs" textClassName={clsx({ invert: contrast === 'light' })}><div><p><b>LOCATION:</b></p></div>
          {location}
        </DataDisplay>

        <DataDisplay
         className="!gap-2 text-xs"
         textClassName={clsx({ invert: contrast === 'light' })}
         ><div><p><b>PLACE OF BIRTH:</b></p></div>
           {placeofbirth}</DataDisplay>

        <DataDisplay 
        className="!gap-2 text-xs"
        textClassName={clsx({ invert: contrast === 'light' })}>
          <div><p><b>GENDER AND NATIONALITY:</b></p></div>
        {genderandnationality}</DataDisplay>

        {/* <DataDisplay
          icon={<Public />}
          link={website && addHttp(website)}
          className="!gap-2 text-xs"
          textClassName={clsx({ invert: contrast === 'light' })}
        >
          {website}
        </DataDisplay> */}

        {/* {profiles.map(({ id, username, network, url }) => (
          <DataDisplay
            key={id}
            icon={getProfileIcon(network)}
            link={url && addHttp(url)}
            className="!gap-2 text-xs"
            textClassName={clsx({ invert: contrast === 'light' })}
          >
            {username}
          </DataDisplay>
        ))} */}
      </div>
    </div>
  );
};

// export const MastheadMain: React.FC = () => {
//   const { summary } = useAppSelector((state) => state.resume.present.basics);

//   return (
//     <>
//       {summary && (
//         <div className="px-4 pt-4">
//           <Markdown>{summary}</Markdown>
//         </div>
//       )}
//     </>
//   );
// };
