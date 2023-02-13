export default function About() {
  return (
    <div className="flex h-full flex-col">
      <div className="py-2 px-12">
        Our dApp provides a form of pooled insurance for local authorities in
        the event of heavy rain and flooding, with funds being released if the
        24 hour rainfall amounts exceed a specified limit. This demo uses the
        rainfall readings for the New Zealand cities of Auckland, Wellington and
        Christchurch. In order to show the dApp distributing the funds, the
        values for Auckland and Wellington have been changed to give the
        pressure reading (hPa) instead of rainfall. As pressure readings (which
        return a value between 950 to 1050hPa) will always be over the 300mm
        limit set in the smart contract, this will see the smart contract always
        trigger. It is unlikely in practice for two cities to suffer from
        simutaneous flooding events, however, the demo uses this to show how the
        smart contract would distribute funds if this was to occur.
      </div>
      <div className="py-2 px-12">
        The local authorities each have a designated blockchain wallet. When
        they deposit into the dApp, their contribution is assigned to that
        wallet. Other participants such as central governments, non-governmental
        organisations and everyday citizens are also able to contribute funds
        which are recorded in a separate "Pot" account. The distribution
        mechanism releases funds based on the amount of rainfall and the
        contribution of the city to the pooled fund.
      </div>
      <div className="py-2 px-12">
        If a city experiences heavy rainfall and flooding then they can update
        their rainfall reading through this page. If the reading confirms that
        the 24 hour rainfall limit has been breached then they can initiate the
        withdrawal (this incurs a higher cost than a simple reading update),
        which will then distribute the funds held by the contract. We note that
        this model can be easily and quickly adapted to any location worldwide
        and and to other weather events such as drought or high windspeed. Due
        to data availability limitations on the AccuWeather Kovan testnet
        oracle, this use case was selected as the most optimal to showcase the
        potential of our approach.
      </div>
    </div>
  );
}
