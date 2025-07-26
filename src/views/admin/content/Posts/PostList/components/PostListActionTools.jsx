import Button from '@/components/ui/Button'
import { TbPlus } from 'react-icons/tb' 
import { useNavigate } from 'react-router-dom'

const PostListActionTools = () => {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <Button
                variant="solid"
                icon={<TbPlus className="text-xl" />}
                onClick={() => navigate('/admin/posts/new')}
            >
                Add Post
            </Button>
        </div>
    )
}

export default PostListActionTools