import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useEffect } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import Subtitle from "../../components/Subtitle";
import Title from "../../components/Title";
import useBreadcump from "../../hooks/useBreadcumps";

type Organization = { id: number; name: string; url: string };

const columns: TableColumn<Organization>[] = [
  {
    name: "Nombre",
    cell: ({ name, url }) => (
      <div className='flex gap-2 items-center'>
        <div className='avatar'>
          <div className='w-7 rounded-full'>
            <img src={url} />
          </div>
        </div>
        {name}
      </div>
    ),
  },
  {
    name: "Accion",
    cell: () => (
      <>
        <button className='btn btn-link text-slate-500' data-set-theme='dark'>
          <FontAwesomeIcon icon={"edit"} />
        </button>
        <button className='btn btn-link text-red-500 '>
          <FontAwesomeIcon icon={"trash"} />
        </button>
      </>
    ),
  },
];

const data: Organization[] = [
  {
    id: 1,
    name: "COCATRAM",
    url: "https://www.cocatram.org.ni/wp-content/uploads/2022/10/COCATRAM.jpeg",
  },
  {
    id: 2,
    name: "Marina Nacional del Salvador",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT13IaO0G3zfRgdQrUFtveN5aI2N42s2tNC5w&s",
  },
  {
    id: 3,
    name: "OMI",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaupkVbMEBYYIEHOzsbRb08v27QQjtlFC81g&s",
  },
];

const OrganizationPage: FC = () => {
  const { setItems } = useBreadcump();

  useEffect(() => {
    setItems([
      { title: "Organizaciones", to: "/login" },
      { title: "Miembros" },
    ]);
  }, [setItems]);

  return (
    <div className='flex flex-col gap-2 m-10'>
      <Title>Organizaciones Marítimas</Title>
      <Subtitle>Listado de organizaciones maritimas del sistema</Subtitle>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default OrganizationPage;
