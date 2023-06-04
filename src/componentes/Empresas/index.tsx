import React from "react";
import EmpresasItens from "./EmpresasItens";
import estilos from "./Empresas.module.scss";
import { useInView } from "react-intersection-observer";

export default function Empresas() {
  const experiencias = [
    {
      empresa: "Exército Brasileiro - 2º Centro de Geoinformação (2º CGEO)",
      cargo: "3º Sargento",
      periodo: "Mar/2011 - Fev/2019",
      descricao: "Como 3º Sargento no Exército Brasileiro, atuei como administrador de servidores em ambiente Linux, sendo responsável pelo gerenciamento e configuração dos servidores DHCP, SAMBA, SQUID, NAGIUS, LDAP, WEBMAIL, SPED e SISBOL. Além disso, liderei a manutenção do site e da intranet da OM, garantindo o pleno funcionamento e atualização dos mesmos. Tive a responsabilidade de realizar a configuração de switches de borda, garantindo a estabilidade e segurança da infraestrutura de rede. Além disso, fui encarregado da manutenção de storages e VMs (máquinas virtuais), assegurando a disponibilidade e desempenho adequados dos sistemas. Desempenhei um papel fundamental na implementação e manutenção de servidores de sistema de segurança, garantindo a proteção dos dados e a integridade das informações. Também fui responsável pela manutenção das máquinas de todo o parque, assegurando o pleno funcionamento dos equipamentos. Além das atividades técnicas, também desempenhei funções administrativas relacionadas à administração pública, como participação em licitações e fiscalização de contratos. Também ministrei instruções de aulas de informática, compartilhando meus conhecimentos e auxiliando no desenvolvimento das habilidades dos colegas."
    },
    {
      empresa: "Hubtel Telecom",
      cargo: "Técnico de Suporte NOC",
      periodo: "Out/20 - Ago/21",
      descricao: "Prestação de suporte às equipes de campo e NOC, colaborando ativamente na resolução de problemas e incidentes relacionados à rede.      Atendimento aos clientes por telefone e chat, fornecendo suporte técnico e esclarecendo dúvidas relacionadas aos serviços de rede.      Gerenciamento e manutenção de redes locais e remotas, incluindo a instalação, configuração e manutenção de computadores e ativos de rede.      Utilização de conhecimentos avançados em redes MikroTik, Switches e Roteadores, VLAN, NAT, CGNAT, BGP, OSPF, bem como experiência em monitoramento utilizando ferramentas como Zabbix e PRTG.      Suporte especializado em conexões Ftth (Fiber to the Home), garantindo a estabilidade e o bom funcionamento das conexões de fibra óptica dos clientes.      Priorização, investigação e resolução de incidentes de acordo com os acordos de nível de serviço (SLAs) estabelecidos, assegurando uma resposta rápida e eficiente.      Durante esse período, desenvolvi habilidades sólidas em suporte de rede, adquiri proficiência em solução de problemas complexos e aprimorei minha capacidade de trabalhar em um ambiente de ritmo acelerado, fornecendo suporte de qualidade aos clientes e equipes internas."
    },
    {
      empresa: "Empresa 3",
      cargo: "Cargo 3",
      periodo: "Jan/20 - Dez/21",
      descricao: "Dero 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021"
    },
    {
      empresa: "Exército Brasileiro - 2º Centro de Geoinformação (2º CGEO)",
      cargo: "3º Sargento",
      periodo: "Mar/2011 - Fev/2019",
      descricao: "Como 3º Sargento no Exército Brasileiro, atuei como administrador de servidores em ambiente Linux, sendo responsável pelo gerenciamento e configuração dos servidores DHCP, SAMBA, SQUID, NAGIUS, LDAP, WEBMAIL, SPED e SISBOL. Além disso, liderei a manutenção do site e da intranet da OM, garantindo o pleno funcionamento e atualização dos mesmos. Tive a responsabilidade de realizar a configuração de switches de borda, garantindo a estabilidade e segurança da infraestrutura de rede. Além disso, fui encarregado da manutenção de storages e VMs (máquinas virtuais), assegurando a disponibilidade e desempenho adequados dos sistemas. Desempenhei um papel fundamental na implementação e manutenção de servidores de sistema de segurança, garantindo a proteção dos dados e a integridade das informações. Também fui responsável pela manutenção das máquinas de todo o parque, assegurando o pleno funcionamento dos equipamentos. Além das atividades técnicas, também desempenhei funções administrativas relacionadas à administração pública, como participação em licitações e fiscalização de contratos. Também ministrei instruções de aulas de informática, compartilhando meus conhecimentos e auxiliando no desenvolvimento das habilidades dos colegas."
    },
    {
      empresa: "Empresa 5",
      cargo: "Cargo 5",
      periodo: "Jan/20 - Dez/21",
      descricao: "Dero 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021"
    },
    {
      empresa: "Empresa 6",
      cargo: "Cargo 6",
      periodo: "Jan/20 - Dez/21",
      descricao: "Dero 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021"
    },
    // Adicione mais objetos de experiência, se necessário
  ];

  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <div ref={ref} 
      // className={estilos.empresas}
      className={`${inView ? estilos.empresas2 : estilos.empresas}`}
    >
      <div className={estilos.empresas__titulos}>
        <h1 className={estilos.empresas__titulo}>experiências</h1>
        <h2 className={estilos.empresas__titulo2}>( )</h2>
      </div>
      <div>
        <EmpresasItens experiencias={experiencias} />
      </div>
    </div>
  );
}
