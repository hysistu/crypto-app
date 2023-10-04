import { Case, CASE_URL } from "components/Case/Interface";
import { getApi } from "src/utils/api";
import { BASE_URL_API } from "src/utils/consts";

const api = getApi(BASE_URL_API || "");

export const getAllCase = async (): Promise<{
  Case: Case[];
}> => {
  try {
    const response = await api.get(`${CASE_URL}`);
    console.log(response, 'esss');
    return { Case: response.data.data.results };

  } catch (e: any) {
    return e.response?.data;
  }
};
export const getAllCaseByMthod = async (params: string): Promise<{
  Case: Case[];
}> => {
  try {
    const response = await api.get(`caseMethod/${params}/${CASE_URL}`);
    return { Case: response.data.results };
  } catch (e: any) {
    return e.response?.data;
  }
};

export const deleteCase = async (
  params: string
): Promise<{
  Case: Case[];
}> => {
  try {
    const response = await api.delete(`${CASE_URL}?id=${params}`);
    return response.data.message;
  } catch (e: any) {
    return e.response.data;
  }
};

export const updateCase = async (
  params: string,
  body: any
): Promise<{
  Case: Case[];
}> => {
  try {
    const response = await api.patch(`${CASE_URL}?id=${params}`, {
      ...body,
    });
    return response.data.message;
  } catch (e: any) {
    return e.response.data;
  }
};

export const CaseStatistic = async (
  // params: string
): Promise<{
  Case: any;
}> => {
  try {
    const response = await api.get(`${CASE_URL}/caseStats`);
    return response.data.data;
  } catch (e: any) {
    return e.response.data;
  }
};

export const CaseStatisticRecords = async (
  id: string,
  body?: any
): Promise<{
  Case: any;
}> => {
  try {
    const response = await api.get(`dailyCases/template?id=${id}`, {
      params: {
        ...body,
      },
    });
    return response.data.data;
  } catch (e: any) {
    return e.response;
  }
};

export const CaseStatisticRecordsAnswer = async (
  params: string
): Promise<{
  Case: any;
}> => {
  try {
    const response = await api.get(
      `dailyCaseItems/getDailyCase?id=${params}`
    );
    return response.data.data;
  } catch (e: any) {
    return e.response;
  }
};
