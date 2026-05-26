import "./styles/Clients.css";

const clients = [
  { name: "Client logo 01", logo: "/client-logos/client-logo-01.svg" },
  { name: "Client logo 02", logo: "/client-logos/client-logo-02.svg" },
  { name: "Client logo 03", logo: "/client-logos/client-logo-03.svg" },
  { name: "Client logo 04", logo: "/client-logos/client-logo-04.svg" },
  { name: "Client logo 05", logo: "/client-logos/client-logo-05.svg" },
  { name: "Client logo 06", logo: "/client-logos/client-logo-06.svg" },
  { name: "Client logo 07", logo: "/client-logos/client-logo-07.svg" },
  { name: "Client logo 08", logo: "/client-logos/client-logo-08.svg" },
  { name: "Client logo 09", logo: "/client-logos/client-logo-09.svg" },
  { name: "Client logo 10", logo: "/client-logos/client-logo-10.svg" },
  { name: "Client logo 11", logo: "/client-logos/client-logo-11.svg" },
  { name: "Client logo 12", logo: "/client-logos/client-logo-12.svg" },
  { name: "Client logo 13", logo: "/client-logos/client-logo-13.svg" },
  { name: "Client logo 14", logo: "/client-logos/client-logo-14.svg" },
  { name: "Client logo 15", logo: "/client-logos/client-logo-15.svg" },
  { name: "Client logo 16", logo: "/client-logos/client-logo-16.svg" },
  { name: "Client logo 17", logo: "/client-logos/client-logo-17.svg" },
  { name: "Client logo 18", logo: "/client-logos/client-logo-18.svg" },
  { name: "Client logo 19", logo: "/client-logos/client-logo-19.svg" },
  { name: "Client logo 20", logo: "/client-logos/client-logo-20.svg" },
];

const Clients = () => {
  const marqueeItems = [...clients, ...clients];

  return (
    <section className="clients-section" aria-labelledby="clients-title">
      <div className="clients-container section-container">
        <h2 id="clients-title">Clients I have worked with.</h2>
      </div>

      <div className="clients-marquee" aria-label="Client logos">
        <div className="clients-track">
          {marqueeItems.map((client, index) => (
            <div
              className="client-logo"
              key={`${client.name}-${index}`}
              aria-hidden={index >= clients.length}
            >
              <img src={client.logo} alt={client.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
