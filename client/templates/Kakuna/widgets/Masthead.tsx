import { Cake, Email, Phone, Public, Room } from '@mui/icons-material';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import React from 'react';

import { useAppSelector } from '@/store/hooks';
import DataDisplay from '@/templates/shared/DataDisplay';
import { formatDateString } from '@/utils/date';
import getProfileIcon from '@/utils/getProfileIcon';
import { addHttp, getPhotoClassNames } from '@/utils/template';

const Masthead = () => {
  const dateFormat: string = useAppSelector((state) => get(state.resume.present, 'metadata.date.format'));
  const { name, photo, email, phone, birthdate, location, placeofbirth, genderandnationality } = useAppSelector(
    (state) => state.resume.present.basics
  );

  return (
    <div className="mb-4 grid justify-center gap-3 border-b pb-4 text-center">
      <div className="mx-auto">
        {photo.visible && !isEmpty(photo.url) && (
          <img
            alt={name}
            src={photo.url}
            width={photo.filters.size}
            height={photo.filters.size}
            className={getPhotoClassNames(photo.filters)}
          />
        )}
      </div>

      <div>
        <h1 className="mb-1">{name}</h1>
        {/* <p className="opacity-75">{headline}</p> */}
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <div className="text-xs"><p><b>D.O.B:</b></p>
         <DataDisplay ><b>{birthdate}</b></DataDisplay>
        </div>
        <div className="text-xs"><p><b>EMAIL:</b></p>
         <DataDisplay link={`mailto:${email}`}>
          {email}
         </DataDisplay>
        </div> 

        <div className="text-xs"><p><b>PHONE:</b></p>
         <DataDisplay link={`tel:${phone}`}>
          {phone}
         </DataDisplay>
        </div> 

        <div className="text-xs"><p><b>PLACE OF BIRTH:</b></p>
         <DataDisplay ><b>{placeofbirth}</b></DataDisplay>
        </div> 
        
        <div className="text-xs"><p><b>GENDER AND NATIONALITY:</b></p>
         <DataDisplay ><b>{genderandnationality}</b></DataDisplay>
        </div> 

        {/* <DataDisplay icon={<Public />} link={addHttp(website)}>
          {website}
        </DataDisplay> */}
        <div className="text-xs"><p><b>ADDRESS:</b></p>
         <DataDisplay ><b>{location}</b></DataDisplay>
        </div>

       

        {/* {profiles.map(({ id, username, network, url }) => (
          <DataDisplay key={id} icon={getProfileIcon(network)} link={url && addHttp(url)}>
            {username}
          </DataDisplay>
        ))} */}
      </div>
    </div>
  );
};

export default Masthead;
