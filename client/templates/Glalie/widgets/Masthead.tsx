import { Cake, Email, Phone, Public, Room } from '@mui/icons-material';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

import Markdown from '@/components/shared/Markdown';
import { useAppSelector } from '@/store/hooks';
import DataDisplay from '@/templates/shared/DataDisplay';
import { formatDateString } from '@/utils/date';
import getProfileIcon from '@/utils/getProfileIcon';
import { addHttp, formatLocation, getPhotoClassNames } from '@/utils/template';

export const MastheadSidebar: React.FC = () => {
  const dateFormat: string = useAppSelector((state) => get(state.resume.present, 'metadata.date.format'));
  const primaryColor: string = useAppSelector((state) => get(state.resume.present, 'metadata.theme.primary'));
  const { name, photo, email, phone, birthdate, location, placeofbirth, genderandnationality} = useAppSelector(
    (state) => state.resume.present.basics
  );

  return (
    <div className="col-span-2 grid justify-items-center gap-4">
      {photo.visible && !isEmpty(photo.url) && (
        <img
          alt={name}
          src={photo.url}
          width={photo.filters.size}
          height={photo.filters.size}
          className={getPhotoClassNames(photo.filters)}
        />
      )}

      <div className="text-center">
        <h1>{name}</h1>
        {/* <p className="mt-1 opacity-75">{headline}</p> */}
      </div>

      <div className="flex flex-col gap-2 rounded border-2 p-4" style={{ borderColor: primaryColor }}>
        

        <DataDisplay className="text-xs">
        <div><p><b>D.O.B:</b></p></div>
          {birthdate}
        </DataDisplay>

        <DataDisplay className="text-xs" link={`mailto:${email}`}>
        <div><p><b>EMAIL:</b></p></div>
          {email}
        </DataDisplay>

        <DataDisplay className="text-xs" link={`tel:${phone}`}>
        <div><p><b>PHONE:</b></p></div>
          {phone}
        </DataDisplay>

        <DataDisplay className="text-xs">
        <div><p><b>LOCATION:</b></p></div>
          {location}
        </DataDisplay>

        <DataDisplay className="text-xs">
        <div><p><b>PLACE OF BIRTH:</b></p></div>
          {placeofbirth}
        </DataDisplay>

        <DataDisplay className="text-xs">
        <div><p><b>GENDER AND NATIONALITY:</b></p></div>
          {genderandnationality}
        </DataDisplay>

        {/* <DataDisplay icon={<Public />} link={addHttp(website)} className="text-xs">
          {website}
        </DataDisplay> */}

        {/* {profiles.map(({ id, username, network, url }) => (
          <DataDisplay key={id} icon={getProfileIcon(network)} link={url && addHttp(url)} className="text-xs">
            {username}
          </DataDisplay>
        ))} */}


      </div>
    </div>
  );
};

// export const MastheadMain: React.FC = () => {
//   const { summary } = useAppSelector((state) => state.resume.present.basics);

//   return <Markdown>{summary}</Markdown>;
// };
