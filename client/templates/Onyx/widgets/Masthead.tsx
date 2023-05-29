import { Cake, Email, Phone, Public, Room } from '@mui/icons-material';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

import { useAppSelector } from '@/store/hooks';
import DataDisplay from '@/templates/shared/DataDisplay';
import { formatDateString } from '@/utils/date';
import getProfileIcon from '@/utils/getProfileIcon';
import { addHttp, formatLocation, getPhotoClassNames } from '@/utils/template';

const Masthead: React.FC = () => {
  const dateFormat: string = useAppSelector((state) => get(state.resume.present, 'metadata.date.format'));
  const {name, photo, email, phone, birthdate, location, placeofbirth, genderandnationality } = useAppSelector(
    (state) => state.resume.present.basics
  );

  return (
    <div className="flex items-center gap-4">
      {photo.visible && !isEmpty(photo.url) && (
        <img
          alt={name}
          src={photo.url}
          width={photo.filters.size}
          height={photo.filters.size}
          className={getPhotoClassNames(photo.filters)}
        />
      )}

      <div className="grid flex-1 gap-1">
        <h1>{name}</h1>
        {/* <p className="opacity-75">{headline}</p> */}

        <div className="mt-2 grid gap-2">
          

          <div className="items-center gap-3">
            <div>
            <DataDisplay>
             <b>D.O.B: {birthdate}</b> 
            </DataDisplay>
            </div>

            <div>  
            <DataDisplay link={`mailto:${email}`}>
            <b>EMAIL: {email}</b> 
            </DataDisplay>
            </div>

            <div>
            <DataDisplay link={`tel:${phone}`}>
            <b>PHONE: {phone}</b> 
            </DataDisplay>
            </div>
             <div>
            <DataDisplay>
            <b>ADDRESS: {location}</b> 
            </DataDisplay>
             </div>

             <div>
            <DataDisplay>
            <b>PLACE OF BIRTH: {placeofbirth}</b> 
            </DataDisplay>
            </div>

            <div>
            <DataDisplay>
            <b>GENDER AND NATIONALITY: {genderandnationality}</b> 
            </DataDisplay>
            </div>




          </div>
        </div>
      </div>

      {/* <div className="grid flex-[0.4] gap-2">
        <DataDisplay icon={<Public />} link={addHttp(website)} className="text-xs">
          {website}
        </DataDisplay>

        {profiles.map(({ id, username, network, url }) => (
          <DataDisplay key={id} icon={getProfileIcon(network)} link={url && addHttp(url)} className="text-xs">
            {username}
          </DataDisplay>
        ))}
      </div> */}
    </div>
  );
};

export default Masthead;
