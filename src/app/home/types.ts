export interface Project {
    id: string;           
    title: string;        
    description: string;  
    image: string;        
    createdAt: Date;      
    updatedAt: Date;      
    deletedAt: Date | null; 
    // user: User;           
    // tags: Tag[];          
    // technologies: Technology[]; 
}