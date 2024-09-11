import React from 'react';

const Resource = () => {
  const frontendResources = [
    {
      title: 'HTML (In Hindi)',
      url: 'https://youtu.be/HcOc7P5BMi4?si=pIuWhm3Upf8ItofM',
    },
    {
        title: 'HTML (In English)',
        url: 'https://youtube.com/playlist?list=PL8p2I9GklV45TrJZwNQMETlJgugm6Twuz&si=-LMroVfc_vUJW8rd',
      },

    {
      title: 'CSS (In Hindi)',
      url: 'https://youtu.be/ESnrn1kAD4E?si=qKku2cn_8p5OBupQ',
    },
    {
        title: 'CSS (In English)',
        url: 'https://youtube.com/playlist?list=PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit&si=iOXJfJfkYpbVB4u7',
      },
    {
      title: 'Tailwind CSS (In Hindi) ',
      url: 'https://youtu.be/_9mTJ84uL1Q?si=8_vFVl6k1JgWOTmb',
    },
    {
        title: 'Tailwind CSS (In English) ',
        url: 'https://youtu.be/ft30zcMlFao?si=hp2-5wkMFslQScYh',
      },
    {
      title: 'JavaScript(In Hindi) ',
       url: 'https://youtu.be/_TjtAyMkiTI?si=libMFYKjViDUKEMj',
    },
    {
        title: 'JavaScript(In English) ',
        url: 'https://youtube.com/playlist?list=PLsyeobzWxl7rrvgG7MLNIMSTzVCDZZcT4&si=cO4iFPvkZmzqbEpx',
      },
    {
      title: 'React JS (In Hindi)',
      url: 'https://youtu.be/k3KqQvywToE?si=2hBbgWTATYXaqsTu',
    },
    {
        title: 'React JS (In English)',
        url: 'https://youtu.be/DLX62G4lc44?si=tmy19eEb_-EbO04P',
      },
  ];

  const backendResources = [
    {
      title: 'Node.js(In Hindi)',
      url: 'https://www.youtube.com/embed/fBNz5xF-Kx4',
    },
    {
        title: 'Node.js(In English)',
        url: 'https://www.youtube.com/watch?v=RLtyhwFtXQA&list=PLWKjhJtqVAbmGQoa3vFjeRbRADAOC9drk',
      },
    {
      title: 'Express.js (In Hindi)',
      url: 'https://youtube.com/playlist?list=PLwGdqUZWnOp3Vqww2cL5KbDkShj4NMRzk&si=sZzgh-6zwPKoVjG_',
    },
    {
        title: 'Express.js (In English)',
        url: 'https://youtube.com/playlist?list=PL_cUvD4qzbkwp6pxx27pqgohrsP8v1Wj2&si=7LD8O2UsV2p6mp30',
      },
    {
      title: 'MongoDB(In Hindi)',
      url: 'https://www.youtube.com/watch?v=J6mDkcqU_ZE&t=30s&pp=ygUQbW9uZ29kYiBpbiBoaW5kaQ%3D%3D',
    },
    {
        title: 'MongoDB(In English)',
        url: 'https://www.youtube.com/watch?v=E-1xI85Zog8&pp=ygUhbW9uZ29kYiBpbiBlbmdsaXNoIGZyZWUgY29kZSBjYW1w',
      },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-cyan-950 mb-8">Web Development Resources</h1>

      {/* Frontend Section */}
      <section className="w-full max-w-4xl mb-10">
        <h2 className="text-2xl font-semibold text-cyan-500 mb-4">Frontend Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {frontendResources.map((resource, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-lg font-medium text-cyan-950 mb-2">{resource.title}</h3>
              <iframe
                className="w-full h-64 rounded-lg"
                src={resource.url}
                title={resource.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </section>

      {/* Backend Section */}
      <section className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-cyan-500 mb-4">Backend & Database Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {backendResources.map((resource, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-lg font-medium text-cyan-950 mb-2">{resource.title}</h3>
              <iframe
                className="w-full h-64 rounded-lg"
                src={resource.url}
                title={resource.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resource;

