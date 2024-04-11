import React from "react";

const AboutCard = ({ headerText }) => {
  return (
    <div>
      <h3 className="unbounded unbounded-600 text-2xl mb-[24px]">
        {headerText}
      </h3>
      <p className="leading-[24px]">
        Mütəxəssislər və sənaye profesionaları tərəfindən idarə olunan
        masterklasslarımız və seminarlarımız, yaradıcı sənət və iş sahələrindən,
        tədqiqatçılıq və texnologiyaya qədər geniş bir diapazonu örtür.
        Keyfiyyətli məzmun və ətraflı təcrübələrlə ictimaiyyətimizə daim dəyişən
        bir dünyada uğur qazanmaq üçün lazım olan alətləri və bilikləri təmin
        etməyə çalışırıq.
      </p>
      <p className="leading-[24px]">
        Biz, Entertainment Hub, yalnız bir platform deyilik - biz bir tədqiqatçı
        cəmiyyətik. İncəsənət və əyləncə üçün bir sevgi dolu, dənizə dərinlərə
        yüzmək üçün bir araya gəldik. Bizimlə bu kəşfiyyat səyahətində qoşulun
        və birlikdə sonsuz imkanları araşdıralım.
      </p>
      <p className="leading-[24px]">
        Entertainment Hub'i seçdiyiniz üçün təşəkkür edirik. Sizi hər addımda
        məhəbbətlə, tədqiqatla və əyləncə ilə təhrik etməkdən məmnun olacağıq.
      </p>
    </div>
  );
};

export default AboutCard;
