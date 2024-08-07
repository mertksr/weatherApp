import React from 'react'
import {Formik , Form, Field, ErrorMessage} from 'formik'

const options = [
    { value: '', label: "Choose City" },
    { value: 'Adana', label: "Adana" },
    { value: 'Adıyaman', label: "Adıyaman" },
    { value: 'Afyonkarahisar', label: "Afyonkarahisar" },
    { value: 'Ağrı', label: "Ağrı" },
    { value: 'Aksaray', label: "Aksaray" },
    { value: 'Amasya', label: "Amasya" },
    { value: 'Ankara', label: "Ankara" },
    { value: 'Antalya', label: "Antalya" },
    { value: 'Ardahan', label: "Ardahan" },
    { value: 'Artvin', label: "Artvin" },
    { value: 'Aydın', label: "Aydın" },
    { value: 'Balıkesir', label: "Balıkesir" },
    { value: 'Bartın', label: "Bartın" },
    { value: 'Batman', label: "Batman" },
    { value: 'Bayburt', label: "Bayburt" },
    { value: 'Bilecik', label: "Bilecik" },
    { value: 'Bingöl', label: "Bingöl" },
    { value: 'Bitlis', label: "Bitlis" },
    { value: 'Bolu', label: "Bolu" },
    { value: 'Burdur', label: "Burdur" },
    { value: 'Bursa', label: "Bursa" },
    { value: 'Çanakkale', label: "Çanakkale" },
    { value: 'Çankırı', label: "Çankırı" },
    { value: 'Çorum', label: "Çorum" },
    { value: 'Denizli', label: "Denizli" },
    { value: 'Diyarbakır', label: "Diyarbakır" },
    { value: 'Düzce', label: "Düzce" },
    { value: 'Edirne', label: "Edirne" },
    { value: 'Elazığ', label: "Elazığ" },
    { value: 'Erzincan', label: "Erzincan" },
    { value: 'Erzurum', label: "Erzurum" },
    { value: 'Eskişehir', label: "Eskişehir" },
    { value: 'Gaziantep', label: "Gaziantep" },
    { value: 'Giresun', label: "Giresun" },
    { value: 'Gümüşhane', label: "Gümüşhane" },
    { value: 'Hakkari', label: "Hakkari" },
    { value: 'Hatay', label: "Hatay" },
    { value: 'Iğdır', label: "Iğdır" },
    { value: 'Isparta', label: "Isparta" },
    { value: 'İstanbul', label: "İstanbul" },
    { value: 'İzmir', label: "İzmir" },
    { value: 'Kahramanmaraş', label: "Kahramanmaraş" },
    { value: 'Karabük', label: "Karabük" },
    { value: 'Karaman', label: "Karaman" },
    { value: 'Kars', label: "Kars" },
    { value: 'Kastamonu', label: "Kastamonu" },
    { value: 'Kayseri', label: "Kayseri" },
    { value: 'Kırıkkale', label: "Kırıkkale" },
    { value: 'Kırklareli', label: "Kırklareli" },
    { value: 'Kırşehir', label: "Kırşehir" },
    { value: 'Kilis', label: "Kilis" },
    { value: 'Kocaeli', label: "Kocaeli" },
    { value: 'Konya', label: "Konya" },
    { value: 'Kütahya', label: "Kütahya" },
    { value: 'Malatya', label: "Malatya" },
    { value: 'Manisa', label: "Manisa" },
    { value: 'Mardin', label: "Mardin" },
    { value: 'Mersin', label: "Mersin" },
    { value: 'Muğla', label: "Muğla" },
    { value: 'Muş', label: "Muş" },
    { value: 'Nevşehir', label: "Nevşehir" },
    { value: 'Niğde', label: "Niğde" },
    { value: 'Ordu', label: "Ordu" },
    { value: 'Osmaniye', label: "Osmaniye" },
    { value: 'Rize', label: "Rize" },
    { value: 'Sakarya', label: "Sakarya" },
    { value: 'Samsun', label: "Samsun" },
    { value: 'Siirt', label: "Siirt" },
    { value: 'Sinop', label: "Sinop" },
    { value: 'Sivas', label: "Sivas" },
    { value: 'Şanlıurfa', label: "Şanlıurfa" },
    { value: 'Şırnak', label: "Şırnak" },
    { value: 'Tekirdağ', label: "Tekirdağ" },
    { value: 'Tokat', label: "Tokat" },
    { value: 'Trabzon', label: "Trabzon" },
    { value: 'Tunceli', label: "Tunceli" },
    { value: 'Uşak', label: "Uşak" },
    { value: 'Van', label: "Van" },
    { value: 'Yalova', label: "Yalova" },
    { value: 'Yozgat', label: "Yozgat" },
    { value: 'Zonguldak', label: "Zonguldak" }
  ];
  

const City = ( { onCitySelect }) => (
    <Formik
      initialValues={{ selectedOption: '' }}
      onSubmit={(values) => {
        onCitySelect(values.selectedOption);
    }}
    >
      {({ setFieldValue }) => (
        <Form>
          <div>
            <label htmlFor="selectedOption">Select City</label>
            <Field as="select" name="selectedOption" className={"cities"}>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Field>
            <ErrorMessage name="selectedOption" component="div" />
            <button type="submit">Submit</button>

          </div>
        </Form>
      )}
    </Formik>
  );
  
export default City