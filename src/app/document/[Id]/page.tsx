import db from "@/utils/db";
import React from "react";
import EditorBlok from "./_components/editor-block";

type SingleDocumentProps = {
  Id: string;
};

const SingleDocumentPage = async ({
  params,
}: {
  params: SingleDocumentProps;
}) => {
  const getDocument = await db.document.findUnique({
    where: {
      id: params.Id,
    },
  });

  return <div className="mt-6"><EditorBlok  document={getDocument}/></div>;
};

export default SingleDocumentPage;
