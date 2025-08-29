import Button from '@/components/ui/Button';
import { TbPlus } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

const LinkListActionTools = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <Button
                variant="solid"
                icon={<TbPlus className="text-xl" />}
                onClick={() => navigate('/admin/links/new')}
            >
                Add Link
            </Button>
        </div>
    );
};

export default LinkListActionTools;