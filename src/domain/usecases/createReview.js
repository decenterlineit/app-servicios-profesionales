export const createReview=input=>({...input,id:`rev-${Date.now()}`,userId:'user-001',status:'published',createdAt:new Date().toISOString().slice(0,10)});
